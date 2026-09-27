import { profileUIData, categoryData, featureProductsData } from "@/types/type"
import image1 from "@/public/Assets/category1.png"
import image2 from "@/public/Assets/category2.png"
import image3 from "@/public/Assets/category3.png"
import image4 from "@/public/Assets/category4.png"
export const profileData: profileUIData[] = [
    {
        "name": "My Account",
        "link": "/account",
    },
    {
        "name": "My Orders",
        "link": "/orders",
    },
    {
        "name": "Logout",
        "link": "",
    }
]

export const CategoryData: categoryData[] = [
    {
        "name": "New In",
        "pieces": "84",
        "image": image1,
    },
    {
        "name": "Women",
        "pieces": "340",
        "image": image2,
    },
    {
        "name": "Men",
        "pieces": "218",
        "image": image3,
    },
    {
        "name": "Accessories",
        "pieces": "127",
        "image": image4,
    }
]

export const FeatureProductsData: featureProductsData[] = [
    {
        "id": 1,
        "bname": "COS",
        "pname": "Cashmere Turtleneck",
        "price": "$195",
        "rating": "4.8",
        "reviews": "(144)",
        "viewproduct": "View Product",
        "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop"
    },
    {
        "id": 2,
        "bname": "ARKET",
        "pname": "Merino Wool Sweater",
        "price": "$195",
        "rating": "4.8",
        "reviews": "(144)",
        "viewproduct": "View Product",
        "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop"
    },
    {
        "id": 3,
        "bname": "AND WANDER",
        "pname": "Technical Field Jacket",
        "price": "$240",
        "rating": "4.8",
        "reviews": "(144)",
        "viewproduct": "View Product",
        "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop"
    },
    {
        "id": 4,
        "bname": "TOTEME",
        "pname": "Relaxed Linen Shirt",
        "price": "$265",
        "rating": "4.5",
        "reviews": "(144)",
        "viewproduct": "View Product",
        "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop"
    }
]