import { Page } from "@playwright/test";

export default class HelperFunction {

    constructor(public page: Page) {
    }

    async cleanText(text: string | null): Promise<string> {
        if (text !== null) {
            return text.replace(/\s+/g, ' ').trim();
        } else {
            return "Text not found";
        }
    }
}
