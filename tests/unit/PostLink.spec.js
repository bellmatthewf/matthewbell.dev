import PostLink from "@/components/PostLink.vue"
import Vuetify from "@/plugins/vuetify"
import { createLocalVue, shallowMount } from "@vue/test-utils"

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
    // let vuetify

    let wrapper
    beforeEach(() => {
        const vuetify = new Vuetify()
        wrapper = shallowMount(PostLink, {
            localVue,
            vuetify,
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
