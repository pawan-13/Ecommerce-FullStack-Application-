import {profileUIData,categoryData} from "@/types/type"
import image1 from "@/public/Assets/category1.png"
import image2 from "@/public/Assets/category2.png"
import image3 from "@/public/Assets/category3.png"
import image4 from "@/public/Assets/category4.png"
export const profileData : profileUIData[] = [
    { 
        "name" : "My Account", 
        "link" : "/account",
    },
    {
        "name" : "My Orders",
        "link" : "/orders",
    },
    {
        "name" : "Logout",
        "link" : "",
    }
]

export const CategoryData : categoryData[] = [
    {
        "name" : "New In",
        "pieces" : "84",
        "image" : image1,
    },
    {
        "name" : "Women",
        "pieces" : "340",
        "image" : image2,
    },
    {
        "name" : "Men",
        "pieces" : "218",
        "image" : image3,
    },
    {
        "name" : "Accessories",
        "pieces" : "127",
        "image" : image4,
    }
]