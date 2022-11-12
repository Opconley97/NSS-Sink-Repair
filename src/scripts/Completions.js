import { getPlumbers , getRequests , getCompletions } from "./dataAccess.js";

/*How do I make this cleaner, and how do I get all completed requests to show up?
It's only doing one iteration then stopping.*/

export const Completions = () => {
    const plumbers = getPlumbers();
    const requests = getRequests();
    const completed = getCompletions();
  
    for (const plumber of plumbers) {
        for (const request of requests) {
            for (const complete of completed) {
                if (plumber.id === parseInt(complete.plumberId)) {
                    if (request.id === parseInt(complete.requestId)) {
                        return `<li>${request.description} was completed by
                        ${plumber.name}
                        </li>`
                    }
                }
            }
        }
    }
}