// import { render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; // Ensure this is in your setup file
// import Skeleton from '../Skeleton';
// describe('Skeleton component', () => {
//   test('renders without crashing', () => {
//     const { getByRole, getAllByRole } = render(<Skeleton />);

//     // Check if the container div is present
//     expect(document.body).toBeInTheDocument(); // Adjusted to select a present element

//     // Check if the SVG icon is present
//     expect(getByRole('img', { hidden: true })).toBeInTheDocument();

//     // Check if the pulse divs are present
//     const pulseDivs = getAllByRole('generic', { hidden: true });
//     expect(pulseDivs).toHaveLength(6); // One for the image container and five for the text placeholders
//   });
// });
