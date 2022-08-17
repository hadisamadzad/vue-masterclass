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

  describe("When user is logged out", () => {
    it("prompt user to sing in", () => {
      const wrapper = mount(MainNav);

      const loginButton = wrapper.find("[data-test='action-button']");
      const profileImage = wrapper.find("[data-test='profile-image']");

      expect(loginButton.exists()).toBe(true);
      expect(profileImage.exists()).toBe(false);
    });
  });

  describe("When user is logged in", () => {
    it("prompt user to sing in", async () => {
      const wrapper = mount(MainNav);

      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='action-button']");
      await loginButton.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });
  });
});
