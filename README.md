# Construction Field Management App

A responsive React.js web application built for the Frontend Web Developer Intern task. The app implements the three required core screens: Login, Project List, and Daily Progress Report (DPR) Form.

## Tech Stack

- React `19.2.0`
- React Router DOM `6.30.1`
- Vite `7.3.1`
- Tailwind CSS `4.2.1`

## Features Implemented

- Login screen with mock authentication
- Client-side routing between login, project list, and DPR form
- Project list with 4 hard-coded projects
- Status badges with color indicators
- Status filter on the project list
- DPR form with:
  - project dropdown
  - date picker
  - weather dropdown
  - work description textarea
  - worker count input
  - image upload for 1 to 3 photos
  - image preview thumbnails
  - user-friendly validation messages
  - success toast on submit
- Responsive layout for mobile, tablet, and desktop

## Project Structure

```text
src/
  components/
  constants/
  data/
  pages/
  utils/
```

## Mock Login Credentials

- Email: `test@test.com`
- Password: `123456`

## Getting Started

1. Clone the repository:

```bash
git clone <your-repository-url>
cd construction-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Implemented vs Not Implemented

Implemented:

- All required screens and navigation
- Responsive UI
- Validation and success feedback
- Bonus status filtering on the project list

Not implemented:

- Real backend authentication
- Persistent form storage or API submission
- Automated tests
- Deployed preview link
- Video walkthrough

## Known Issues / Limitations

- Authentication is fully mocked and does not persist session state.
- DPR submissions are not saved after page refresh.
- Vite `7.3.1` expects Node `20.19+` or `22.12+`. The app still built successfully in this environment, but using a supported Node version is recommended.

## Submission Notes

For the internship submission, include:

- Public GitHub repository link
- Optional deployed preview link from Vercel or Netlify
- 5 to 10 minute walkthrough video
- Email submission to `contact@getflytechnologies.com`
