import { Page } from "@playwright/test";
import Helper from "./helper"; 
import CareeersPageObjects from "./pageObject/careersPageObjects"; 

export default class CareersPage {
    private helper: Helper;
    private careeersPageObjects: CareeersPageObjects;

    constructor(public page: Page) {
        this.helper = new Helper(page);
        this.careeersPageObjects = new CareeersPageObjects(page);
    }

    async mainBannerIsVisible() {
        const mainBanner = await this.careeersPageObjects.mainBanner();
        const mainBannerIsVisible = mainBanner.isVisible();
        return mainBannerIsVisible;
    }

    async getInTouchButton() {
        const getInTouchButton = await this.careeersPageObjects.getInTouchButton();
        const getInTouchButtonIsVisible = getInTouchButton.isVisible();
        return getInTouchButtonIsVisible;
    }

    async textOnMainBanner() {
        const textOnMainBanner = await this.careeersPageObjects.textOnMainBanner();
        const textOnMainBannerContent = await textOnMainBanner.textContent();
        const cleanedText = this.helper.cleanText(textOnMainBannerContent);
        return cleanedText;
    }

    async scrollToWhatWeOfferText() {
        const whatWeOfferText = await this.careeersPageObjects.whatWeOfferText();
        await whatWeOfferText.scrollIntoViewIfNeeded();
    }

    async whatWeOfferText() {
        const whatWeOfferText = await this.careeersPageObjects.whatWeOfferText();
        const whatWeOfferTextTextContent = await whatWeOfferText.textContent();
        const cleanedText = this.helper.cleanText(whatWeOfferTextTextContent);
        return cleanedText;
    }

    async scrollToInnovateAndGrowWithUsText() {
        const innovateAndGrowWithUsText = (await this.careeersPageObjects.innovateAndGrowWithUsText());
        await innovateAndGrowWithUsText.scrollIntoViewIfNeeded();
    }

    async innovateAndGrowWithUsText() {
        const innovateAndGrowWithUsText = await this.careeersPageObjects.innovateAndGrowWithUsText();
        const innovateAndGrowWithUsTextContent = await innovateAndGrowWithUsText.textContent();
        const cleanedText = this.helper.cleanText(innovateAndGrowWithUsTextContent);
        return cleanedText;
    }

    async scrollToOurMembersTestimonialsText() {
        const ourMembersTestimonialsText = (await this.careeersPageObjects.ourMembersTestimonialsText());
        await ourMembersTestimonialsText.scrollIntoViewIfNeeded();
    }

    async ourMembersTestimonialsText() {
        const ourMembersTestimonialsText = await this.careeersPageObjects.ourMembersTestimonialsText();
        const ourMembersTestimonialsTextContent = await ourMembersTestimonialsText.textContent();
        const cleanedText = this.helper.cleanText(ourMembersTestimonialsTextContent);
        return cleanedText;
    }

    async ourMembersTestimonialsCardsAreVisible() {
        const ourMembersTestimonialsCards = await this.careeersPageObjects.ourMembersTestimonialsCards();
        const ourMembersTestimonialsCardsAreVisible = ourMembersTestimonialsCards.isVisible();
        return ourMembersTestimonialsCardsAreVisible;
    }

    async scrollToVacanciesText() {
        const availableVacanciesText = await this.careeersPageObjects.availableVacanciesText();
        await availableVacanciesText.scrollIntoViewIfNeeded();
    }

    async availableVacanciesText() {
        const availableVacanciesText = await this.careeersPageObjects.availableVacanciesText();
        const availableVacanciesTextContent = await availableVacanciesText.textContent();
        const cleanedText = this.helper.cleanText(availableVacanciesTextContent);
        return cleanedText;
    }
   
    async availableVacanciesCardsAreVisible() {
        const availableVacanciesCards = await this.careeersPageObjects.availableVacanciesCards();
        const availableVacanciesCardsAreVisible = availableVacanciesCards.isVisible();
        return availableVacanciesCardsAreVisible;
    }
}
