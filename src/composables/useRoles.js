import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { axiosClient, axiosClientFile } from "@/axios";

export default function useRoles() {
    const errors = ref([]);
    const router = useRouter();
    const loading = ref(false);
    const roles = ref([]);
    const role = ref([]);


    const cleanErrors = () => {
        errors.value = [];
    };

    const getRoles = async () => {
        errors.value = [];
        loading.value = true;
        await axiosClient
            .get(`/users-permissions/roles`)
            .then((response) => {
                roles.value = response.data.roles;
            })
            .catch((e) => {
                loading.value = false;
                if (e.response.status == 422) {
                    for (const key in e.response.data.errors)
                        errors.value.push(e.response.data.errors[key][0]);
                } else {
                    errors.value.push(e.response.data.message);
                }
            })
    }

    const getRole = async (id) => {

    }

    return {
        errors,
        roles,
        getRoles
    }
}