# Stopwatch Application
This is a simple Stopwatch application built with React and TypeScript. The application allows users to start, stop, reset the stopwatch, and record lap times. The UI is styled using Bootstrap for a clean and modern look.

In this version, the project is implemented using functional components in React 18. My goal was to showcase the capabilities of React 18, including how to effectively manage state and side effects with hooks. Additionally, I aimed to demonstrate best practices in component design by extracting the button logic into separate components, resulting in cleaner and more maintainable code.

While it's possible to reduce the button components to a single component, I chose to keep them separate to avoid passing too many props, maintaining clarity and simplicity in the component structure.

## Features
- Start/Stop: Toggle the stopwatch on and off.
- Reset: Reset the stopwatch back to 0.
- Lap: Record and display lap times.
- Delete Laps: Remove individual lap times.
  
## Installation

1. Clone the repository:

`git clone https://github.com/sepidehrezayi/stopwatch-functional.git`

2. Install dependencies:
Make sure you have Node.js installed. Then run:

`npm install`

3. Run the application:

`npm start`

## Project Structure
- **src/components/Stopwatch.tsx:** The main stopwatch component that handles timing logic and displays the UI.
- **src/components/buttons/StartStopButton.tsx:** Component for the start/stop button.
- **src/components/buttons/ResetButton.tsx:** Component for the reset button.
- **src/components/buttons/LapButton.tsx:** Component for the lap button.
- **src/components/Lap.tsx:** Component that displays and manages lap times.
- **src/utils/timeFormatter.ts:** Utility function for formatting time in MM
format.
- **src/components/stopwatch.css:** CSS file for styling the stopwatch.
  
## Technologies Used
- React
- TypeScript
- Bootstrap
- CSS

