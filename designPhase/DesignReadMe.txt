5/25/2021
Notes on this database Project.
First Begin by brainstorming features I want this to have
The overall purpose of this project is to create a tool to assist me in managing my finances. 
This includes tracking expenses as well as budgeting for the future. Ideally this is coded in a way that multiple people could use it.
Example of some of these features in exampleFinanceFunctions.jpg

UI Design Functions:
0. Save all of this data, and ideally back it up on the cloud somehow
1. Track charges on debit card("Cost" Col on my Google Sheet)
	1a. possibly this could be expanded to allow users to track multiple accounts
2. Add a description to each charge
3. Categorize each charge. ex. Food, Entertainment, Games, Social, Bills, etc
	3a. These categories would be customizable by each user, with some default ones that can be altered
4. Auto save the date a charge occurred, allow to be edited in case its recorded late
5. Total spent since a certain date viewing option
6. Total spent in a specific time frame viewing option (ex the year of 2019, or between Feb and May)
7. Calculate current Bank account given an initial deposit of the current balance of that account at 
   creation of a profile using this software
8. Deposits into the account, not just charges
9. Be able to list separately deposits and charges, but both can do the same views(ex 5,6)
10. Show specific Monthly expenses for a year
11. Show average monthly expenses for that year
12. Show specific yearly expenses and average yearly expenses
13. Allow Defining Recurring charges(Like monthly subscriptions, where the price does not fluctuate)
	13a. Can save the date the charge will occur and the amount charge.
	13b. Can set the frequency of the charge(monthly, weekly, yearly, etc)
	13c. maybe allow setting reminders for non-identical cost, but repeating charges, like electricity
14. Show expenditures based on categories
15. Intuitive UI
16. Display all of the above information in digestible, useful ways. Ex. graphs, charts, etc
	Pie charts for per category expenses/deposits
	Bar graph for net income over the course of some length of time(if increaseing to decreasing)
	Line Graph for deposits or charges over time, either daily, or monthly average
	**Maybe just a way to choose what kind of graph for whatever data, let the user choose how to see it.
	Ex. View data by category within a certain date range, only for charges of some min value,
	and choose to view that info as a pie chart. Would need to also be able to choose if data displayed is 
	a yearly, monthly, weekly, or daily average, possibly let user choose this, say every 421 days or something random.
17. Save to the database when exiting a cell or on a button press.

Budget Functions:
1. Auto create a budget based on average spendings for each catergory in a certain date range, default current year.
2. Modify that budget, determine what percentage, or flat amouint, each catergory gets on average each month
3. Display budget visually.
	Ex. Display the overall budget as a pie chart, where a percent of your monthly money is going
	Also a bar graph showing how much of that percent you have already used up at some time in a month.
4. Record when the budget was followed within acceptable parameters, ex going 10% over budget is ok. 
	this can be defined by user as a saved setting.
5. 


Database Design:
The database will be created so that it can have multiple users, but this will likely not be fully used, just adding for futures sake.
A user can have multiple different bank accounts to track.
A user can have multiple budgets, and these budgets could be associated with all or one of the accounts
An account does not have to have a budget, but a budget does need to have an account
No floating accounts or budegts, they must each have a user.



Stretch Goals(not necessary, but long term improvements):
1. Auto reading in receipts
2. Itemizing charges, such as walmart receipts, and categorizing each micro-purchase 
3. Find a way to use more advanced techs like AI, graph theory, Data Mining, etc
	good way to keep up in the industry and learn new things. Good idea to seperate those builds though
4. Re-occuring entries.
	Auto insert the entries as defined by the user that repeat with regularity, such as subscriptions or salary.
5. Budget: Be able to choose a category you would like to reduce the spending on, then by how much and automatically 
	create a budget based on that information. Ex Reducing spending on entertainment by 10%.
6. Make a Mobile version of the app to use, and have it interface properly, or atleast be able to sync.
7. 


Glossary:
charge: any time money is withdrawn from an account, would appear on the online banking system
deposit: any time money is deposited into an account
entry: either a deposit or a charge


UI Key:
^: this symbol means a drop down menu will be used
Darker grey boxes are buttons, while boxes with the same color as the background are text fields.








