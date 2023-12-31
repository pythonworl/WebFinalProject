import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  it("should render the form and handle form submission", () => {
    render(<BookingForm />);

    // Find form elements
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const dateInput = screen.getByLabelText(/date/i);
    const timeSelect = screen.getByLabelText(/time/i);
    const guestsInput = screen.getByLabelText(/guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitButton = screen.getByText(/confirm reservation/i);

    // Fill in form fields
    fireEvent.change(firstNameInput, { target: { value: "Nelson" } });
    fireEvent.change(lastNameInput, { target: { value: "Joy" } });
    fireEvent.change(emailInput, { target: { value: "nelsonjoy8@yahoo.com" } });
    fireEvent.change(dateInput, { target: { value: "2024-10-19" } });
    fireEvent.change(timeSelect, { target: { value: "21:00" } });
    fireEvent.change(guestsInput, { target: { value: "2" } });
    fireEvent.change(occasionSelect, { target: { value: "Aniversery" } });

    // Expected form field values
    expect(firstNameInput.value).toBe("Nelson");
    expect(lastNameInput.value).toBe("Joy");
    expect(emailInput.value).toBe("nelsonjoy8@yahoo.com");
    expect(dateInput.value).toBe("2024-10-19");
    expect(timeSelect.value).toBe("21:00");
    expect(guestsInput.value).toBe("2");
    expect(occasionSelect.value).toBe("Aniversery");

    // Submit the form
    fireEvent.click(submitButton);
  });
});
