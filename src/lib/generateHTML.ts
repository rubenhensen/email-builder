import type { Message } from '$lib/Message'
import type { Date } from '$lib/Date'
import {preMain} from '$lib/preMain'
import { postMain } from '$lib/postMain'
import {preMessage} from '$lib/preMessage'
import { postMessage } from '$lib/postMessage'
import {preSummary} from '$lib/preSummary'
import {middleSummary} from '$lib/middleSummary'
import { postSummary } from '$lib/postSummary'
import { messageDivider} from '$lib/messageDivider'


function download(filename: string, text: string) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

export function generateHTML(messages: Message[], dates: Date[]): void {
    let email = "";
    const summary = generateSummary(messages, dates);
    email += preMain + summary;
    messages.forEach((message, i) => {
        email += messageDivider;
        email += generateMessage(message, i)
    });
    email += postMain;
    download("email.html", email);
}

function generateMessage(message: Message, index: number): string {
    const toBeGenerated = "<h1>" + index.toString() + " - " + message.title + "</h1>" + 
    "<p>" + message.body + "</p>";
    return preMessage + toBeGenerated + postMessage;
}

function generateSummary(messages: Message[], dates: Date[]): string {
    let toBeGenerated1 = '';
    messages.forEach((message, i) => {
        toBeGenerated1 += i.toString() + " - " + message.title + "<br/>";
    });

    let toBeGenerated2 = '';
    dates.forEach((date, i) => {
        toBeGenerated2 += "<u>" + date.date + "</u><br/>" + date.event + "<br/>";
    });
    return preSummary + toBeGenerated1 + middleSummary + toBeGenerated2 + postSummary;                       
}
