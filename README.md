# FlowDesk

A professional project management dashboard built with React.

FlowDesk is a SaaS-style workspace designed to help teams manage projects, clients, tasks, invoices, activity, and workspace operations from one interface.

## Features

- Dashboard with real-time calculated workspace statistics
- Project management workspace
- Create, edit, delete, and update projects
- Project search and filtering
- Project progress tracking
- Client management interface
- Task management Kanban board
- Invoice management workspace
- Activity timeline
- Global search
- Notification center
- User profile dropdown
- LocalStorage persistence
- Shared project state with React Context
- Loading, empty, and error states
- Responsive layout for desktop, tablet, and mobile
- Accessible interactive components
- Reusable React components

## Tech Stack

- React
- React Router
- JavaScript
- CSS
- Vite
- LocalStorage
- React Context API
- Git
- GitHub

## Project Structure

```text
src/
├── components/
│   ├── activity/
│   ├── clients/
│   ├── invoices/
│   ├── layout/
│   ├── notifications/
│   ├── profile/
│   ├── projects/
│   ├── search/
│   ├── tasks/
│   └── ui/
│
├── context/
│   ├── ProjectContext.jsx
│   └── useProjects.js
│
├── data/
│   ├── activity.js
│   ├── clients.js
│   ├── invoices.js
│   ├── notifications.js
│   ├── projects.js
│   └── tasks.js
│
├── pages/
│   ├── Activity.jsx
│   ├── Activity.css
│   ├── Clients.jsx
│   ├── Clients.css
│   ├── Dashboard.jsx
│   ├── Dashboard.css
│   ├── Invoices.jsx
│   ├── Invoices.css
│   ├── Projects.jsx
│   ├── Projects.css
│   ├── Tasks.jsx
│   └── Tasks.css
│
├── App.jsx
├── index.css
└── main.jsx
```

Getting Started

1. Clone the repository
   git clone YOUR_REPOSITORY_URL
2. Enter the project
   cd flowdesk
3. Install dependencies
   npm install
4. Start the development server
   npm run dev

The application will be available through the local Vite development URL.

Main Workspaces
Dashboard

Provides an overview of:

Revenue
Outstanding invoices
Active projects
Task completion
Project progress
Workspace metrics
Recent tasks
Recent invoices
Projects

The Projects workspace supports:

Creating projects
Editing projects
Deleting projects
Updating project status
Tracking progress
Searching projects
Filtering by status
Filtering by priority

Project changes are persisted through browser LocalStorage.

Clients

Provides client information including:

Client status
Contact information
Project count
Revenue
Search
Status filtering
Tasks

Provides a Kanban-style workspace for:

To Do
In Progress
Completed
Invoices

Provides invoice tracking for:

Paid invoices
Pending invoices
Overdue invoices
Invoice values
Client billing information
Activity

Displays a workspace activity timeline for:

Projects
Tasks
Invoices
Clients
Global Search

Searches across:

Projects
Clients
Tasks
Invoices

Project search results are connected to the shared project state.

State Management

FlowDesk currently uses React Context for project state management.

The project context handles:

Project creation
Project updates
Project deletion
Project status updates
LocalStorage persistence

This architecture provides a foundation for replacing LocalStorage with a backend API in a future version.

Future Improvements

Potential future versions can include:

Backend API
Authentication
PostgreSQL database
Prisma ORM
Real-time collaboration
Team member management
Role-based permissions
Cloud deployment
Automated testing
Analytics
Email notifications
Learning Goals

This project was built to practice professional frontend development concepts including:

React component architecture
React Router
State management
Context API
Custom hooks
CRUD operations
LocalStorage
Form handling
Search and filtering
Responsive UI design
Accessibility
Reusable components
Git workflow
Portfolio-oriented project development
Author

Built as a portfolio project to demonstrate practical React development and frontend engineering skills.
