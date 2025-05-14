def add(a, b):
    """Add two numbers and return the result."""
    return a + b


def multiply(a, b):
    """Multiply two numbers and return the result."""
    return a * b

def subtract(a, b):
    """Subtract two numbers and return the result."""
    return a - b

def divide(a, b):
    """Divide two numbers and return the result."""
    return a / b

if __name__ == "__main__":
    print("Simple calculator functions")
    print(f"5 + 3 = {add(5, 3)}")
    print(f"5 * 3 = {multiply(5, 3)}")
    print(f"5 - 3 = {subtract(5, 3)}")
    print(f"5 / 3 = {divide(5, 3)}")