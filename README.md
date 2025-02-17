# Unhandled Modulo Operator in Calculator Function

This repository demonstrates a common JavaScript error: failing to handle all possible cases within a switch statement or conditional logic.  The `operate` function lacks handling for the modulo operator (`%`).

## Bug Description

The provided JavaScript code implements a simple calculator with functions for addition, subtraction, multiplication, and division. However, it throws an error if the user attempts to use the modulo operator. This happens because the `switch` statement in the `operate` function doesn't have a `case` for the `%` operator. 

## Solution

The solution involves adding a case to handle the modulo operator within the `switch` statement.  This ensures that the function can correctly handle all four arithmetic operations including the modulo operator.  The updated code provides a more robust and complete solution, handling all anticipated input.
