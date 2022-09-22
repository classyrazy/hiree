import { defineStore } from "pinia";
import { ref, reactive, watch } from "vue";

export const useHireStore = defineStore("hire", () => {
    let reviewDetails = reactive([])
    let currentReview = ref(null)
    if (localStorage.getItem("CURRENT_REVIEW")) {
        console.log(currentReview.value)
        currentReview.value = JSON.parse(localStorage.getItem("CURRENT_REVIEW"))
    }
    if (localStorage.getItem("REVIEW_DETAILS")) {
        console.log(reviewDetails)
        reviewDetails = JSON.parse(localStorage.getItem("REVIEW_DETAILS"))
    }
    // watch(reviewDetails, (details) => {
    //     console.log("Hello This has changed", details)
    //     localStorage.setItem("REVIEW_DETAILS", JSON.stringify(details))
    // })
    // watchEffect(()=> {
    //     console.log("Hello This has changed", reviewDetails)
    // })
    function changeReviewDetails(newUser: { devId: string, rating: number, githubExplength: number }) {
        // console.log(reviewDetails, "hello", newUser)
        if (reviewDetails.length > 0) {
            console.log(reviewDetails, "hello", newUser)
            const index = reviewDetails.findIndex(devDet => devDet.devId == newUser.devId)
            if (index !== -1) {
                reviewDetails[index] = newUser
            } else {
                reviewDetails.push(newUser)
            }
            // return
        }
        else {
            console.log("hello World")
            reviewDetails.push(newUser)
        }
        localStorage.setItem("REVIEW_DETAILS", JSON.stringify(reviewDetails))
    }
    function changeCurrentReview(reviewId: string) {
        currentReview.value = reviewId
    }

    return {
        reviewDetails,
        changeReviewDetails,
        currentReview,
        changeCurrentReview
    }
})