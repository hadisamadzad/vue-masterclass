import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav";

describe("MainNav", () => {
  it("displays the company name", async () => {
    const companyName = "My Company Name";
    const wrapper = mount(MainNav);
    await wrapper.setData({
      company: companyName,
    });

    expect(wrapper.text()).toMatch(companyName);
  });
});
