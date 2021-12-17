import PostLink from "@/components/PostLink.vue"
import { createLocalVue, shallowMount } from "@vue/test-utils"
import VueRouter from "vue-router"

describe("PostLink.vue", () => {
    const propsData = {
        filename: "fantasy-basketball",
        title: "Fantasy Basketball Model",
        date: "2021-06-23",
        duration: "10 mins",
        tags: [
            { name: "Project", isActive: false },
            { name: "Python", isActive: false },
            { name: "Vue", isActive: false },
        ],
    }

    const localVue = createLocalVue()
    localVue.use(VueRouter)
    const router = new VueRouter()

    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(PostLink, {
            localVue,
            router,
            propsData: { ...propsData },
        })
    })

    it("renders", () => {
        expect(wrapper.exists()).toBe(true)
    })
})
