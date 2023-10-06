import { Page } from "@playwright/test";

export default class CareeersPageObjects {

    constructor(public page: Page) {  
    }

    async mainBanner() {
        await this.page.waitForLoadState("load");
        return await this.page.locator("div[class='bg-cover bg-center h-[460px] xl:h-[767px] 4k:h-[1536px] bg-career-hero']");
    }

    async getInTouchButton() {
        await this.page.waitForLoadState("load");
        return await this.page.locator("//button[normalize-space()='Get in Touch']");
    }

    async textOnMainBanner() {
        await this.page.waitForLoadState("load");
        return await this.page.locator("h2[class='MuiTypography-root MuiTypography-body1 !text-[24px] !leading-[32px] !font-semibold md:!text-[28px] md:!leading-[32px] lg:!text-[48px] lg:!leading-[56px] !text-left text-center md:text-left mui-style-9l3uo3']");
    }

    async whatWeOfferText() {
        await this.page.waitForLoadState("load");
        return await this.page.locator("span[class='py-4 xl:py-5 text-2xl md:text-3xl xl:text-4xl font-semibold']");
    }

    async innovateAndGrowWithUsText() {
        await this.page.waitForLoadState("load");
        return await this.page.locator("h2[class='MuiTypography-root MuiTypography-body1 !text-[24px] !leading-[32px] !font-semibold md:!text-[28px] md:!leading-[32px] lg:!text-[48px] lg:!leading-[56px] !text-left mui-style-9l3uo3']");
    }

    async ourMembersTestimonialsText() {
        await this.page.waitForLoadState("load");
        return await this.page.locator("h2[class='MuiTypography-root MuiTypography-body1 !text-[24px] !leading-[32px] !font-semibold md:!text-[28px] md:!leading-[32px] lg:!text-[48px] lg:!leading-[56px] !text-center py-4 xl:py-5 mui-style-9l3uo3']");
    }

    async ourMembersTestimonialsCards() {
        await this.page.waitForLoadState("load");
        return await this.page.locator("div[class='swiper-wrapper']");
    }

    async availableVacanciesText() {
        await this.page.waitForLoadState("load");
        return await this.page.locator("div[class='flex flex-col max-w-[1440px] w-full gap-y-[40px] lg:gap-y-[60px] md:gap-y-[60px] px-[16px] md:px-[84px] xl:px-[144px] py-10 xl:py-[60px] m-auto'] div[class='flex flex-col gap-y-[16px] text-center']");
    }

    async availableVacanciesCards() {
        await this.page.waitForLoadState("load");
        return await this.page.locator("div[class='grid justify-center grid-cols-1 gap-4 md:gap-6 xl:gap-10 xl:grid-cols-3']");
    }
}
