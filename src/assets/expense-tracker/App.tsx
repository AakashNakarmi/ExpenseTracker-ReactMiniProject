import { useState } from "react";
import ExpenseList from "./ExpenseList";
import Form from "./Form";
import ExpenseFilter from "./ExpenseFilter";
import "bootstrap/dist/css/bootstrap.css";

const AppPseudo = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 20, category: "groceries" },
    { id: 2, description: "Biscuit", amount: 15, category: "groceries" },
    { id: 3, description: "Jam", amount: 10, category: "groceries" },
    { id: 4, description: "Bread", amount: 20, category: "groceries" },
    { id: 5, description: "Iron", amount: 1000, category: "household" },
    { id: 6, description: "Toaster", amount: 2000, category: "household" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <Form
        onSubmit={(data) =>
          setExpenses([
            ...expenses,
            {
              ...data,
              id: expenses.length + 1,
            },
          ])
        }
      ></Form>
      <ExpenseFilter
        onChange={(category) => setSelectedCategory(category)}
      ></ExpenseFilter>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      ></ExpenseList>
    </div>
  );
};

export default AppPseudo;
