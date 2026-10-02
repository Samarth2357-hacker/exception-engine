# ClearFlow Exception Engine (Prototype)

A lightweight Next.js dashboard prototype designed to visualize and resolve fulfilment exceptions (WMS/OMS discrepancies) for mid-market D2C brands. 

This repository accompanies the business proposition for the "Productized Fulfilment Visibility Offer" (Hard 2) assessment.

## Architecture
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide-React
- **State Management:** React `useState` (optimized for stateless prototype demonstration)
- **Deployment:** Vercel (Edge Network)

## Setup & Run Instructions
1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scope Boundary
**Completed Scope:**
- Interactive UI for the Operations Dashboard.
- Queue filtering (Open vs. Resolved exceptions).
- Client-side state mutation (Force Resolve functionality).
- KPI metric calculations based on active queue data.

**Excluded Scope (Future Roadmap):**
- **Database Persistence:** Currently uses in-memory mocked state. A production build would implement PostgreSQL via Prisma.
- **Webhook Ingestion:** Real-time data feeds from Shopify/ShipStation are mocked.
- **Authentication:** Role-based access control (RBAC) omitted for frictionless reviewer access.
- **Automated Tests:** Omitted to prioritize rapid UI/UX prototyping and business logic presentation within the assessment window.

## Limitations & Known Issues
- Because state is held in-memory via React hooks, refreshing the page will reset the exception queue to its initial dummy data. 
- The search bar UI is visually complete but not wired to a filtering function in this specific prototype branch.

## Deployment Details
The application is deployed on Vercel with zero-configuration continuous integration linked directly to the `main` branch of this repository.