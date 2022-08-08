import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav";

describe("MainNav", () => {
  it("displays the company name", () => {
    const companyName = "Bobo Careers";
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch(companyName);
  });

  it("displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-menu-item']"
    );
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    console.log(navigationMenuTexts);
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Bobo Corp",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
});
