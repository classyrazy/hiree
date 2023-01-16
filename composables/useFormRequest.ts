import axios from "axios"
import { ref, computed } from "vue";
interface formObj {
    value: null | string;
    error: null | string;
}
export default function useFormRequest(
    service: string,
    auth?: boolean,
    form?: object[] | null,
    postData?: object | null,
    done?: Function,
    errorFunc?: Function
) {
    let refedForm = ref(form);
    let serverForm = null;
    let baseURL = "https://hiree-8nfj.onrender.com/"
    // let baseURL = "https://hiree-server.herokuapp.com/"
    // let baseURL = "http://localhost:7000/"
    let token = localStorage.getItem("USER_AUTH_TOKEN");

    if (form) {
        serverForm = computed(() => {
            let form = {};
            for (let key in refedForm.value) {
                form[key] = refedForm.value[key].value;
            }
            return form;
        });
    }

    let data = ref(null);
    let loading = ref(false);
    let err = null;
    let error = ref(null);

    function clearError() {
        err = null;
        for (let key in refedForm.value) {
            refedForm.value[key].error = null;
        }
    }
    async function submitForm() {
        if (postData) return;
        if (loading.value) return;
        loading.value = true;

        try {
            let req = null
            //   let req = new Graph().service(service);
            if (auth) {
                // if (!token) {
                //     throw new Error("No token");
                // }
                req = axios.post(`${baseURL}${service}`, serverForm.value, {
                    headers: { 'Authorization': 'Bearer ' + token }
                });
            } else {
                req = axios.post(`${baseURL}${service}`, serverForm.value);
            }
            data.value = await req;
            clearError();
        } catch (error) {
            loading.value = false;

            if (typeof errorFunc == "function") await errorFunc(error);
        }
        loading.value = false;

        if (typeof done == "function") await done(data.value);
    }
    async function submitData() {
        if (!postData) return;
        if (loading.value) return;
        loading.value = true;
        let toServerData = ref(postData);
        try {
            let req = null
            // console.log(`${baseURL}${service}`)
            //   let req = new Graph().service(service);
            if (auth) {
                // if (!token) {
                //     throw new Error("No token");
                // }
                req = axios.post(`${baseURL}${service}`, toServerData.value, {
                    headers: { 'Authorization': 'Bearer ' + token }
                });
            } else {
                req = axios.post(`${baseURL}${service}`, toServerData.value);
            }
            data.value = await req;
            // console.log(data.value);
            clearError();
        } catch (error) {
            if (typeof errorFunc == "function") await errorFunc(error);
        }
        loading.value = false;

        if (typeof done == "function") await done(data.value);
    }
    return {
        submitForm,
        submitData,
        loading,
        data,
    };
}
