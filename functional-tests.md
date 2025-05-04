# Functional Test Cases for [Your App Name]

## Introduction
This document describes the test cases to ensure that key features of the application work as expected.

---

## 1. Navbar

### Test Case 1: Navbar Rendering
**Objective**: Verify that the navbar is rendered and contains the correct links.

- **Steps**:
  1. Open the application.
  2. Check if the navbar is visible at the top of the page.
  3. Ensure that the navbar contains links for "Products" and "Orders".

- **Expected Result**: The navbar should be visible, and the "Products" and "Orders" links should be present.

### Test Case 2: Navbar Links Functionality
**Objective**: Ensure the navigation links work correctly.

- **Steps**:
  1. Click on the "Products" link in the navbar.
  2. Verify that the user navigates to the `/products` page.
  3. Click on the "Orders" link.
  4. Verify that the user navigates to the `/orders` page.

- **Expected Result**: Clicking each link should navigate to its respective page.

---

## 2. Order Create

### Test Case 1: Order Form Initialization
**Objective**: Verify that the order form is initialized with all required fields.

- **Steps**:
  1. Navigate to the "Create Order" page.
  2. Verify that the form includes the following fields: `Product Name`, `Product Description`, `Price`, `Quantity`.

- **Expected Result**: The form should contain the required fields for order creation.

### Test Case 2: Form Validation
**Objective**: Ensure that the form correctly validates required fields.

- **Steps**:
  1. Leave the fields empty.
  2. Try to submit the form.
  
- **Expected Result**: The form should show validation errors and should not submit.

### Test Case 3: Form Submission
**Objective**: Ensure the form is submitted successfully when valid data is entered.

- **Steps**:
  1. Fill in the form with valid data.
  2. Submit the form.

- **Expected Result**: The form should be submitted, and the user should be redirected to the `Order List` page.

---

## 3. Order List

### Test Case 1: Data Display
**Objective**: Verify that the order details are displayed correctly in the table.

- **Steps**:
  1. Navigate to the `Order List` page.
  2. Ensure the table shows the `Order ID`, `Product Name`, `Price`, `Quantity`, and `Total`.

- **Expected Result**: The order details should be displayed correctly in the table.

### Test Case 2: Order Delete
**Objective**: Verify that orders can be deleted.

- **Steps**:
  1. Click the "Delete" button for any order in the list.
  2. Confirm deletion if prompted.

- **Expected Result**: The order should be deleted, and the list should update.

---

## 4. Product Create

### Test Case 1: Product Form Initialization
**Objective**: Verify that the product creation form is initialized with required fields.

- **Steps**:
  1. Navigate to the "Create Product" page.
  2. Verify that the form contains fields like `Product Name`, `Description`, and `Price`.

- **Expected Result**: The form should contain the required fields.

### Test Case 2: Product Form Validation
**Objective**: Ensure the form validates required fields before submission.

- **Steps**:
  1. Leave required fields empty.
  2. Try to submit the form.

- **Expected Result**: The form should not be submitted, and validation errors should appear.

---

## 5. Product List

### Test Case 1: Product List Rendering
**Objective**: Verify that the products are listed correctly.

- **Steps**:
  1. Navigate to the `Product List` page.
  2. Verify that each product has a `Name`, `Price`, `Description`, and `Edit/Delete` actions.

- **Expected Result**: Products should be displayed correctly with all the necessary details.
