import { expect, test } from "../base/fixture";
import CareersPage from "../src/careersPage";

const careersPageURL = "https://theforest.ai/careers";
const textOnMainBannerExpected = "Careers at Forest Technologies";
const availableVacanciesTextExpected = "Available Vacancies";
const whatWeOfferTextExpected = "What We Offer";
const innovateAndGrowWithUsTextExpected = "Innovate & Grow with Us";
const ourMembersTestimonialsTextExpected = "Our Members Testimonials";

test.describe("Careers page cases", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(careersPageURL);
  });
  test.use({
    navigationTimeout: 30000,
  });

  test("Verify the banner is showing", async ({
    careersPage
  }) => {
    console.log("Verify the banner is showing");
    const mainBannerIsVisible = await careersPage.mainBannerIsVisible();
    console.log(`Is main banner visible: ${mainBannerIsVisible}`);
    expect(mainBannerIsVisible).toBe(true);
  });

  test("Verify the get in touch button is showing", async ({
    careersPage
  }) => {
    console.log("Verify the get in touch button is showing");
    const getInTouchButton = await careersPage.getInTouchButton();
    console.log(`Is get in touch button visible: ${getInTouchButton}`);
    expect(getInTouchButton).toBe(true);
  });

  test("Verify the text on main banner is as expected", async ({
    careersPage
  }) => {
    console.log("Verify the text on main banner is as expected");
    const textOnMainBanner = await careersPage.textOnMainBanner();
    console.log(`Text on main banner is : ${textOnMainBanner}`);
    expect(textOnMainBanner).toEqual(textOnMainBannerExpected);
  });

  test("Verify the what we offer section text is as expected", async ({
    careersPage
  }) => {
    console.log("Verify the what we offer section text is as expected");
    await careersPage.scrollToWhatWeOfferText();
    const whatWeOfferText = await careersPage.whatWeOfferText();
    console.log(`What we offer section text is : ${whatWeOfferText}`);
    expect(whatWeOfferText).toEqual(whatWeOfferTextExpected);
  });

  test("Verify the innovate & grow with us section text is as expected", async ({
    careersPage
  }) => {
    console.log("Verify the innovate & grow with us section text is as expected");
    await careersPage.scrollToInnovateAndGrowWithUsText();
    const innovateAndGrowWithUsText = await careersPage.innovateAndGrowWithUsText();
    console.log(`Innovate & grow with us section text is : ${innovateAndGrowWithUsText}`);
    expect(innovateAndGrowWithUsText).toEqual(innovateAndGrowWithUsTextExpected);
  });

  test("Verify the our members testimonials section text is as expected", async ({
    careersPage
  }) => {
    console.log("Verify the our members testimonials section text is as expected");
    await careersPage.scrollToOurMembersTestimonialsText();
    const ourMembersTestimonialsText = await careersPage.ourMembersTestimonialsText();
    console.log(`Our members testimonials section text is : ${ourMembersTestimonialsText}`);
    expect(ourMembersTestimonialsText).toEqual(ourMembersTestimonialsTextExpected);
  });

  test("Verify the our members testimonials cards is showing", async ({
    careersPage
  }) => {
    console.log("Verify the our members testimonials cards is showing");
    await careersPage.scrollToOurMembersTestimonialsText();
    const ourMembersTestimonialsCardsAreVisible = await careersPage.ourMembersTestimonialsCardsAreVisible();
    console.log(`Are our members testimonials cards visible: ${ourMembersTestimonialsCardsAreVisible}`);
    expect(ourMembersTestimonialsCardsAreVisible).toBe(true);
  });

  test("Verify the available vacancies section text is as expected", async ({
    careersPage
  }) => {
    console.log("Verify the available vacancies section text is as expected");
    await careersPage.scrollToVacanciesText();
    const availableVacanciesText = await careersPage.availableVacanciesText();
    console.log(`Available vacancies section text is : ${availableVacanciesText}`);
    expect(availableVacanciesText).toEqual(availableVacanciesTextExpected);
  });

  test("Verify the available vacancies cards is showing", async ({
    careersPage
  }) => {
    console.log("Verify the available vacancies cards is showing");
    await careersPage.scrollToVacanciesText();
    const availableVacanciesCardsAreVisible = await careersPage.availableVacanciesCardsAreVisible();
    console.log(`Are available vacancies cards visible: ${availableVacanciesCardsAreVisible}`);
    expect(availableVacanciesCardsAreVisible).toBe(true);
  });
});
