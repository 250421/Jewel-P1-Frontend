# Potion Inventory Management System

## Introduction
- Rose, Full Stack Software Developer at Revature
- Tech Stack:
    - Core Framework: React
    - JavaScript Superset: TypeScript
    - Styling: TailwindCSS with ShadCN UI components
    - Routing: TanStack Router
    - State Management: TanStack Query
    - HTTP Client: Axios
    - Build Tool: Vite
    - Version Control: Git
- Created a potion inventory management system
    - Shows potions created by various magical apothecaries

## Technical Details
- Show ERD

## Demo
- Show path between sign-up and sign-in
- Create account
    - Try invalid email and pass
    - Try taken email (rose123@gmail.com)
    - Create valid account
- Sign in
    - Try invalid combination
    - Sign in correctly
    - Try (and fail) to access “sign-up” and “sign-in” pages
- Logout
    - Logout and sign back in
- Add potion
    - Try (and fail) to create a potion without all fields filled
    - Try (and fail) to create a potion that already exists
    - Try (and fail) to create a potion with 0 or negative stock
    - Create a valid potion
- Delete potion
- Click on a potion to navigate to potion page

## Conclusion
- Key learnings: 
    - Personal studies and experience have been mostly frontend
    - Got to learn how to create a backend and connect it to the frontend
        - Specifically, how to create sessions (most challenging part)
- What I would do differently:
    - Create my potion entity in the backend from the start
    - Had to go back and implement it while working on the frontend
- Future stretch goals:
    - Finish what I missed
    - Have multiple admins function as one “company”
        - All admin from that company would be able to edit potions that that company sells
