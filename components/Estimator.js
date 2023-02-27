// import styles from './FeedbackForm.module.css'

//   // Define variables to store user's responses
//   let roomType, pictureChoices;

//   // Get references to the HTML elements
//   const promptEl = document.getElementById("remodel-prompt");
//   const roomTypeEl = document.getElementById("room-type");
//   const pictureEls = promptEl.querySelectorAll("img");
//   const submitBtn = document.getElementById("remodel-submit");

//   // Event listeners for room type and picture choices
//   roomTypeEl.addEventListener("change", function() {
//     roomType = roomTypeEl.value;
//     enableSubmitButton();
//   });

//   function selectPicture(el) {
//     // Get the selected picture's alt text and store it in the array
//     const choice = el.alt;
//     pictureChoices.push(choice);

//     // If the user has made two choices, enable the submit button
//     if (pictureChoices.length === 2) {
//       enableSubmitButton();
//     }
//   }

//   // Event listener for submit button
//   submitBtn.addEventListener("click", function() {
//     // Call function to calculate estimate
//     const estimate = calculateRemodelCost(roomType, pictureChoices);

//     // Display the estimate to the user
//     alert(`Your estimated remodel cost is $${estimate}.`);
//   });

//   // Function to calculate the estimate based on user's responses
//   function calculateRemodelCost(roomType, pictureChoices) {
//     let baseCost;

//     // Determine base cost based on room type and picture choices
//     if (roomType === "bathroom") {
//       if (pictureChoices.includes("Bathroom 1")) {
//         baseCost = 5000;
//       } else {
//         baseCost = 10000;
//       }
//     } else {
//       if (pictureChoices.includes("Kitchen 1")) {
//         baseCost = 10000;
//       } else {
//         baseCost = 20000;
//       }
//     }

//     return baseCost;
//   }

//   // Function to enable the submit button when all required choices have been made
//   function enableSubmitButton() {
//     if (roomType && pictureChoices && pictureChoices.length === 2) {
//       submitBtn.disabled = false;
//     }
//   }

// export default function Estimator() {
//   return (
//     <div id="remodel-prompt" style="display: none;">
//       <h3>Let's Estimate Your Remodel Cost</h3>
//       <p>Answer a few questions to get started:</p>
//       <div>
//         <label for="room-type">Which room do you want to remodel?</label>
//         <select id="room-type">
//           <option value="bathroom">Bathroom</option>
//           <option value="kitchen">Kitchen</option>
//         </select>
//       </div>
//       <div>
//         <h4>Choose Your Favorite</h4>
//         <p>First Set of Pictures:</p>
//         <div>
//           <img src="path/to/bathroom1.jpg" alt="Bathroom 1" onclick="selectPicture(this)" />
//           <img src="path/to/kitchen1.jpg" alt="Kitchen 1" onclick="selectPicture(this)" />
//         </div>
//         <p>Second Set of Pictures:</p>
//         <div>
//           <img src="path/to/bathroom2.jpg" alt="Bathroom 2" onclick="selectPicture(this)" />
//           <img src="path/to/kitchen2.jpg" alt="Kitchen 2" onclick="selectPicture(this)" />
//         </div>
//       </div>
//       <button id="remodel-submit" disabled>Get Estimate</button>
//     </div>
//   )
// }
