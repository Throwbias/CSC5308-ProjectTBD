# TableLogic: Real-Time Restaurant Table Tracker

> A real-time table tracker that allows walk-in customers to instantly see live seating availability.

## Team Submission Checklist — Assignment 1

Before submitting, confirm all of the following:

| Name | GitHub Handle | Role |
|------|--------------|------|
| Aaron T. | @github-handle | Project Lead / DevOps |
| Valerie H. | @github-handle | Backend Lead |
| Aaron G. | @github-handle | Frontend Lead |

## Project Overview

Finding an open table at popular restaurants can be a guessing game. This application provides a real-time table tracker that allows customers to instantly see live seating availability. It features a host dashboard for restaurant staff to update table statuses on the fly, and a customer-facing display that updates dynamically. 

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend | React.js | 18.x |
| Backend | Node.js + Express | 20.x LTS |
| Database | PostgreSQL via Neon | 15.x |
| Hosting | Render | — |

## Getting Started

> Setup instructions will be added in Week 7. For now, see the Vision Document in `/docs/vision/`.

## Project Documents

- [Vision Document](docs/vision/vision-doc.pdf)
- [SRS / Requirements](docs/vision/srs.pdf) *(added Week 2)*
- [Architecture Document](docs/adr/) *(added Week 4)*

## Sprint Progress

| Week | Sprint | Status |
|------|--------|--------|
| Week 1 | Sprint 0 — Setup & Vision | ✅ Complete |
| Week 2 | Sprint 1 — Requirements | 🔄 In Progress |

## Developer Notes: Database Seeding
The database schema and placeholder configurations are maintained under the `/database` directory. 

* To build the table structure, execute the scripts inside `database/schema.sql` within your SQL editor.
* To populate the application map with initial live tracking metrics for testing, run the mock data transactions inside `database/seed.sql`.