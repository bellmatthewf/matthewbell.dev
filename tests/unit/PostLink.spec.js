import PostLink from "@/components/PostLink.vue"
import { createLocalVue, shallowMount } from "@vue/test-utils"
import VueRouter from "vue-router"

describe("PostLink.vue", () => {
    const propsData = {
        filename: "fantasy-basketball",
        title: "Monetizing my Fantasy Basketball Model as a SAAS Website",
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

    // it("renders props.msg when passed", () => {
    //     const wrapper = shallowMount(PostLink, {
    //         propsData: { ...propsData },
    //     })
    //     expect(wrapper.text()).toMatch(msg)
    // })
})
