import { test, expect } from '@playwright/test';

test('Orange - Add employee details',async({page}) => {

    const employee = {
firstName: 'sd',
middleName: 'M',
lastName: 'D'
};
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
await page.getByPlaceholder('Password').fill('admin123');
await page.getByRole('button', { name: 'Login' }).click();

await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
await page.getByRole('link', { name: 'PIM' }).click();

await page.getByRole('button', { name: 'Add' }).click();
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');
await page.getByRole('textbox', { name: 'First Name' }).fill('sd');
await page.getByRole('textbox', { name: 'Middle Name' }).fill('M');
await page.getByRole('textbox', { name: 'Last Name' }).fill('D');

await page.getByRole('button', { name: 'Save' }).click();

await expect(await page.getByRole('textbox', { name: 'First Name' })).toHaveValue(employee.firstName);
await expect(await page.getByRole('textbox', { name: 'Middle Name' })).toHaveValue(employee.middleName);
await expect(await page.getByRole('textbox', { name: 'Last Name' })).toHaveValue(employee.lastName);
await page.close();
});
