import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const useHireStore = defineStore("hire", () => {
    let reviewDetails = reactive([])
    function changeReviewDetails(newUser: { devId: string, rating: number, githubExplength: number }) {
        if (reviewDetails.length > 0) {
            console.log(reviewDetails, "hello", newUser)
            const index = reviewDetails.findIndex(devDet => devDet.devId == newUser.devId)
            if(index !== -1) {
                reviewDetails[index] = newUser
            }else{
                reviewDetails.push(newUser)
            }
            // return
        }
        else {
            console.log("hello World")
            reviewDetails.push(newUser)
        }
    }

    return {
        reviewDetails,
        changeReviewDetails
    }
})