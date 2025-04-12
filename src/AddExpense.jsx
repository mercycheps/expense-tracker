import React from "react";

export default function AddExpense() {
  return (
    <form action="/action_page.php">
    <label for="fname">Add Expense</label>
    <input type="text" id="fname" name="Add Expense" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
  
    <input type="submit" value="Submit"/>
  </form>
   
  );
}
