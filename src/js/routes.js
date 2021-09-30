import DashBoardPage from '../pages/overview/dashboard.f7.html';
import AboutPage from '../pages/about/about.f7.html';
import FormPage from '../pages/form.f7.html';
import AccountsManagePage from '../pages/manage/accounts.f7.html';
import ReportPage from '../pages/report/report.f7.html';
import LoginPage from '../pages/login.f7.html';

import DynamicRoutePage from '../pages/dynamic-route.f7.html';
import RequestAndLoad from '../pages/request-and-load.f7.html';
import NotFoundPage from '../pages/404.f7.html';

import AsidePage from '../pages/aside.f7.html';

import AddSystemAccountPage from '../pages/manage/accounts/add.f7.html';
import EditSystemAccountPage from '../pages/manage/accounts/edit.f7.html';

import DashboardPage from '../pages/overview/dashboard.f7.html';
import ListBorrowersPage from "../pages/borrowers/list-borrowers.f7.html";
import AddBorrowerPage from '../pages/borrowers/add-borrower.f7.html';
import BorrowerInfoPage from '../pages/borrowers/borrower-info.f7.html';
import ListBooksPage from '../pages/books/list-books.f7.html';
import AvailableBooksPage from '../pages/books/available-books.f7.html';
import AddBookPage from '../pages/books/add-book.f7.html';
import BookInfoPage from "../pages/books/book-info.f7.html";
import AccountPage from "../pages/account/account.f7.html";
import ChangeInfoPage from "../pages/account/change-info.f7.html";
import ChangePasswordPage from "../pages/account/change-password.f7.html";
import BorrowerTracePage from "../pages/borrowers/borrower-trace.f7.html";
import BookTracePage from "../pages/books/book-trace.f7.html";
import TopBookInfoPage from "../pages/overview/top/top-book-info.f7.html";
import TopBorrowerInfoPage from "../pages/overview/top/top-borrower-info.f7.html";
import BorrowingBooksPage from "../pages/books/list-borrowing-books.f7.html";
import BorrowingBorrowersPage from "../pages/borrowers/list-borrowing-borrowers.f7.html";

const routes = [
	{
		path: '/',
		component: DashboardPage,
	}, {
		path: '/top/',
		routes: [{
			path: 'books/:bookCode/',
			component: TopBookInfoPage,
		}, {
			path: 'borrowers/:borrowerCode/',
			component: TopBorrowerInfoPage,
		}]
	},{
		path: '/borrowers/',
		component: ListBorrowersPage,
		routes: [{
			path: 'add/',
			component: AddBorrowerPage,
		}, {
			path: 'info/:borrowerCode/',
			component: BorrowerInfoPage,
		}, {
			path: 'trace/:borrowerCode/',
			component: BorrowerTracePage,
		}, {
			path: 'borrowing/',
			component: BorrowingBorrowersPage,
		}],
	}, {
		path: '/books/',
		component: ListBooksPage,
		routes: [{
			path: 'available/',
			component: AvailableBooksPage,
		}, {
			path: 'add/',
			component: AddBookPage,
		}, {
			path: 'info/:bookCode/',
			component: BookInfoPage,
		}, {
			path: 'trace/:bookCode/',
			component: BookTracePage,
		}, {
			path: 'borrowing/',
			component: BorrowingBooksPage,
		}],
	}, {
		path: '/account/',
		component: AccountPage,
		routes: [{
			path: 'change-info/',
			component: ChangeInfoPage,
		}, {
			path: 'change-password/',
			component: ChangePasswordPage,
		}],
	},
	{
		path: '/manage/',
		routes: [{
			path: 'accounts/',
			component: AccountsManagePage,
			routes: [{
				path: "add/",
				component: AddSystemAccountPage
			}, {
				path: "edit/:accountId/",
				component: EditSystemAccountPage
			}]
		}]
	},
	{
		path: '/report/',
		component: ReportPage,
	},
	{
		path: '/about/',
		component: AboutPage,
	},
	{
		path: '/form/',
		component: FormPage,
	},
	{
		path: '/aside/',
		component: AsidePage
	},
	{
		path: '/login/',
		component: LoginPage,
	},
	{
		path: '(.*)',
		component: NotFoundPage,
	},
];

export default routes;
