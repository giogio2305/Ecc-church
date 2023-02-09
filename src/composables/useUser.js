import { reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { axiosClient, axiosClientFile } from "@/axios";

export default function useUsers() {
    const errors = ref([]);
    const router = useRouter();
    const route = useRoute();
    const loading = ref(false);
    const isFinish = ref(false);
    const users = ref([]);
    const user = ref([]);
    const selectArray = ref([]);
    const searchField = ref("username");
    const searchValue = ref("");
    const headers = [
       // { text: "Image", value: "avatar" },
        { text: "Name", value: "username" },
      //  { text: "Phone", value: "phone" },
        { text: "Email", value: "email" },
        { text: "Role", value: "role.id" },
       { text: "Confirmed", value: "confirmed" },
        { text: "Action", value: "id" },
    ];


    const cleanErrors = () => {
        errors.value = [];
    };

    const getUsers = async () => {
        errors.value = [];
        loading.value = true;
        await axiosClient
            .get(`/users?populate=*`)
            .then((response) => {
                users.value = response.data;
            })
            .catch((e) => {
                loading.value = false;
                if (e.response.status == 400) {
                    if(e.response.data.error.details.errors){
                        e.response.data.error.details.errors.forEach((err) => {
                            errors.value.push(err.message);
                        })
                    }else{
                    errors.value.push(e.response.data.error.message);
                    }
                } else {
                    errors.value.push(e.response.data.message);
                }
                router.replace({
                    name: route.name,
                    hash: '#errors'
                });
            });
    }

    const getUser = async (id) => {

    }

    const deleteUsers = async () => {

    }

    return {
        users,
        user,
        selectArray,
        searchField,
        searchValue,
        headers,
        errors,
        getUsers,
        isFinish,
        getUser,
        cleanErrors,
        deleteUsers,
    }
}