import { defineStore } from "pinia";
import { ref, reactive, watch } from "vue";

export const useHireStore = defineStore("hire", () => {
    let reviewDetails = reactive([])
    let currentReview = ref(null)
    let fetchedDataCached = reactive(new Map())
    let savedData = reactive(new Map())
    let devData = reactive(new Map())
    if (localStorage.getItem("CURRENT_REVIEW")) {
        currentReview.value = JSON.parse(localStorage.getItem("CURRENT_REVIEW"))
    }
    if (localStorage.getItem("REVIEW_DETAILS")) {
        reviewDetails = JSON.parse(localStorage.getItem("REVIEW_DETAILS"))
    }
    function changeReviewDetails(newUser: { devId: string, rating: number, githubExplength: number }, reviewId: string) {
        // console.log(reviewDetails, "hello", newUser)
        if(reviewId !== JSON.parse(localStorage.getItem("REVIEW_DETAILS_ID"))){
            reviewDetails = []
        }
        if (reviewDetails.length > 0) {
            const index = reviewDetails.findIndex(devDet => devDet.devId == newUser.devId)
            if (index !== -1) {
                reviewDetails[index] = newUser
            } else {
                reviewDetails.push(newUser)
            }
            // return
        }
        else {
            reviewDetails.push(newUser)
        }
        localStorage.setItem("REVIEW_DETAILS", JSON.stringify(reviewDetails))
        localStorage.setItem("REVIEW_DETAILS_ID", JSON.stringify(reviewId))
    }
    function changeCurrentReview(reviewId: string) {
        currentReview.value = reviewId
    }
    function addNewFetchedData(key: string, data: any) {
        fetchedDataCached.set(key, data)
    }
    function addNewSavedData(key: string, data: any) {
        savedData.set(key, data)
    }
    function addNewDevData(key: string, data: any) {
        devData.set(key, data)
    }

    return {
        reviewDetails,
        changeReviewDetails,
        currentReview,
        changeCurrentReview,
        fetchedDataCached,
        savedData,
        addNewFetchedData,
        addNewSavedData,
        devData,
        addNewDevData
    }
})