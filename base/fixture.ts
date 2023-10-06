import { test as basetest } from "@playwright/test";
import CareersPage from "../src/careersPage";
import CareeersPageObjects from "../src/pageObject/careersPageObjects";
import Helper from "../src/helper";

type pages = {
    careersPage: CareersPage;
    careeersPageObjects: CareeersPageObjects;
    helper: Helper;
}

const testPages = basetest.extend<pages>({
    careersPage: async ({ page }, use) => {
        await use(new CareersPage(page));
    },
    careeersPageObjects: async ({ page }, use) => {
        await use(new CareeersPageObjects(page));
    },
    helper: async ({ page }, use) => {
        await use(new Helper(page));
    },
})

export const test = testPages;
export const expect = testPages.expect;
