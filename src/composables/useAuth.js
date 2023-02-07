import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { axiosClient, axiosClientFile } from "@/axios";

export default function useAuth() {
    const errors = ref([]);
    const router = useRouter();
    const loading = ref(false);


    return {
        errors,
        loading,
    }
}