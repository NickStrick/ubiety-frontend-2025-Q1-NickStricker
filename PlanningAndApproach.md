# Plan
## What are we trying to accomplish?
- Users can see a chart of user presense in a vertical timeline
## Whos is it for?
- Users who want to know the lastest updates of their fellow users
## How will we accomplish this?
- Caluculate the duration of presence for each profile
- loop through the calculated data to display our timeline
- using React, Typescript, and styling libraries to build it out
## When? (Deadlines)
- "A Couple hours" was the language used, I'm going to assume that means, give or take 2 hours.
## Where? (Context)
- profile presence within a time period, not much detail was given for context, 
- assuming it's for Ubiety's project, and the nature of the data labeling family and visitors, we can assume the context is people present at your home.
## Testing
- Where we need to test our data to make sure it is secure and of the correct type?
- when calculating the duration, and anytime we recieve or manipulate the data.
## Questions
- What is the context of the timeline? what data does the timeline represent? This is ambiguous, based on context, we might change our solution
- Who is it for? We can fill in the gaps and say it's for all users, however there is no explicit audience in the problem description

# Technologies
- React, TypeScript, MUI (Material UI)

# Actions taken
1. run: npx create-react-app presence-timeline-app --template typescript
2. 