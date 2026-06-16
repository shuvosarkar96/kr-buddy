# KR Buddy Software Requirements Specification (SRS)

## 1. Introduction

### 1.1 Purpose

This document defines the software requirements for KR Buddy, a web application designed to support international students living in South Korea by providing essential guidance on immigration, housing, campus life, emergency procedures, language basics, and help requests.

### 1.2 Scope

KR Buddy is a responsive React-based web application with content-driven pages, a contact/help request form, and an admin dashboard to manage user requests. It is intended for international students who need reliable, practical information and mild administrative support while studying in South Korea.

### 1.3 Definitions, Acronyms, and Abbreviations

- KR Buddy: The application.
- ARC: Alien Registration Card.
- UI: User Interface.
- UX: User Experience.
- Supabase: Backend-as-a-Service provider used for authentication and data storage.
- Admin: Authenticated user who manages help requests.
- User: Visitor to the public site.

### 1.4 References

- `README.md` in project root
- `src/App.tsx` application routing
- `src/pages/*` content and feature pages
- `src/lib/supabase.ts` backend configuration

## 2. Overall Description

### 2.1 Product Perspective

KR Buddy is a standalone single-page application built with React, TypeScript, Vite, Tailwind CSS, and Supabase. It provides navigable informational pages and an interactive help workflow.

### 2.2 Product Functions

The product supports:
- Home/landing page with quick access to major topics.
- ARC registration guidance.
- Dormitory rules and safety information.
- Emergency procedures and important contact numbers.
- Korean language basics and useful phrases.
- Help request submission with form validation.
- Admin authentication, request review, filtering, and status updates.

### 2.3 User Classes and Characteristics

- Primary users: international students in Korea seeking quick guidance.
- Secondary users: campus support staff or mentors browsing information and viewing help requests.
- Admin users: authorized personnel with access to the dashboard and Supabase authentication.

### 2.4 Operating Environment

The system runs in modern web browsers on desktop and mobile devices. Development and deployment target Vite-powered static hosting, with Supabase providing backend services.

### 2.5 Design and Implementation Constraints

- Must use React with TypeScript.
- Uses HashRouter for client-side navigation.
- Styling implemented with Tailwind CSS.
- Backend operations are served by Supabase.
- Deployable as a static site via GitHub Pages or similar.

### 2.6 Assumptions and Dependencies

- Supabase is available for authentication and data storage.
- Users have internet access to load the site and reach Supabase.
- Browser supports modern JavaScript and CSS features.

## 3. System Features and Requirements

### 3.1 Navigation and Content Pages

#### 3.1.1 Home Page

- Display app overview and main navigation cards.
- Provide quick links to ARC guide, dorm rules, emergency, language, and help sections.
- Present concise descriptions for each major topic.

#### 3.1.2 ARC Guide Page

- Explain ARC registration purpose and required documents.
- Present practical steps and tips.

#### 3.1.3 Dormitory Rules Page

- Provide dormitory safety guidelines and behavior expectations.
- Detail fire safety, quiet hours, visitor policies, and rule enforcement.

#### 3.1.4 Emergency Page

- Show emergency numbers and procedures.
- Advise students on hospital, police, and travel hotline usage.
- Recommend installation of emergency alert apps and preparation steps.

#### 3.1.5 Language Page

- Teach Hangul basics, consonants, vowels, and compound letters.
- Show sample syllable formation and common phrases.
- Provide phrase tables for greetings, shopping, transportation, and emergencies.

### 3.2 Help Request Submission

#### 3.2.1 Help Form

- Fields: name, email, category, message.
- Category options: General, Visa, Housing, Jobs, Language, Emergency.
- Validate: name min 2 characters, valid email format, message min 10 characters.
- Submit request to Supabase `contacts` table with default status `pending`.
- Display success or error notification after submission.

#### 3.2.2 User Feedback

- Show inline validation messages for form errors.
- Clear form fields after successful submission.
- Use toast notifications for submission results.

### 3.3 Authentication and Admin Dashboard

#### 3.3.1 Admin Login

- Provide email/password authentication via Supabase.
- Prevent access to dashboard without successful login.
- Display error when credentials are invalid.

#### 3.3.2 Admin Dashboard

- List submitted help requests sorted by creation date descending.
- Show request details: name, email, category, message, status, timestamp.
- Support filtering by request status: all, pending, resolved.
- Allow marking pending requests as resolved.
- Support admin logout.

### 3.4 Accessibility and Usability

- Responsive layout for mobile and desktop.
- Clear headings and readable text.
- Buttons and inputs with visible focus styles.
- Form controls labeled by placeholder text and field order.

## 4. External Interface Requirements

### 4.1 User Interfaces

- Web UI rendered in React.
- Navigation via header and route links.
- Forms and dashboards styled using Tailwind CSS.

### 4.2 Software Interfaces

- Supabase JavaScript client for authentication and database operations.
- React Router for page routing.
- Toast system for user notifications.

### 4.3 Communications Interfaces

- HTTPS communication between client and Supabase.
- No email or SMS integration in current version.

## 5. Nonfunctional Requirements

### 5.1 Performance

- Page load time should remain reasonable on standard broadband.
- Form submission and dashboard updates should complete promptly.

### 5.2 Security

- Authenticate admins before granting access to dashboard pages.
- Never expose Supabase secret credentials in client code.
- Validate form input before database insertion.

### 5.3 Reliability

- Application should handle failed Supabase requests gracefully.
- Display friendly error messages on backend failures.

### 5.4 Maintainability

- Organized React component and page structure.
- TypeScript types for improved code quality.
- Modular hooks and utility functions.

### 5.5 Portability

- Deployable on static hosting providers.
- Compatible with major modern browsers.

### 5.6 Internationalization

- Content is English-first with Korean phrases and translations.
- Future support may include full multi-language UI.

## 6. Data Requirements

### 6.1 Data Entities

#### Contact Request

- `id`: unique identifier.
- `name`: requester name.
- `email`: requester email.
- `category`: selected topic category.
- `message`: help request text.
- `status`: pending or resolved.
- `created_at`: timestamp.

### 6.2 Data Storage

- Store help requests in Supabase `contacts` table.
- No local persistence beyond runtime state.

### 6.3 Data Validation

- Name field should not be empty and should contain at least two characters.
- Email field must match a standard email format.
- Message field must contain at least ten characters.

## 7. Use Cases

### 7.1 UC1: Browse University Support Content

- Actor: Student
- Trigger: Open KR Buddy in browser.
- Precondition: User has internet connectivity.
- Main flow: User navigates to home page, selects a topic card, reads information.
- Postcondition: User gains guidance on ARC, dorm rules, emergency, language, or campus life.

### 7.2 UC2: Submit Help Request

- Actor: Student
- Trigger: User opens Help page and submits the form.
- Precondition: User enters valid name, email, and message.
- Main flow: System validates input, saves request to Supabase, confirms submission.
- Postcondition: Help request is stored with `pending` status.

### 7.3 UC3: Review and Resolve Requests

- Actor: Admin
- Trigger: Admin logs in and visits dashboard.
- Precondition: Admin is authenticated.
- Main flow: System fetches requests, admin filters by status, marks selected requests as resolved.
- Postcondition: Request status is updated and reflected in the dashboard.

## 8. Glossary

- Admin: Authorized user who manages contacts.
- Dormitory: Student housing facility.
- Emergency Alert App: Mobile application providing disaster notifications in Korea.
- Hangul: Korean writing system.

## 9. Future Enhancements

- Expand authentication to role-based access control.
- Add full content management for help topics.
- Provide multi-language interface support.
- Add AI-assisted answers and chat support.
- Add notifications or email alerts for admin updates.
