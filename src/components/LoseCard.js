import { useBudgets } from "../contexts/BudgetsContext"
import BudgetCard from "./BudgetCard"

export default function Loss() {
  const { expenses, budgets } = useBudgets()
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0)
  const max = budgets.reduce((total, budget) => total + budget.max, 0)
  const loss = amount - max

 if(loss > 0){
  return <BudgetCard amount={loss} name="Loss"  hideButtons />
 }
 else{
     return null;
 }
}