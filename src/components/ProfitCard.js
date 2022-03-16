import { useBudgets } from "../contexts/BudgetsContext"
import BudgetCard from "./BudgetCard"

export default function TotalBudgetCard() {
  const { expenses, budgets } = useBudgets()
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0)
  const max = budgets.reduce((total, budget) => total + budget.max, 0)
  const Profit = max - amount
  
 if(Profit > 0){
  return <BudgetCard amount={Profit} name="Profit"  hideButtons />
 }
 else{
     return null;
 }
}