import { expect, test } from '@testronaut/angular';
import { Hello } from './hello';

test('should display "Hello, testronaut-demo!"', async ({ mount, page }) => {
  await mount(Hello);
  await expect(page.getByText('Hello, testronaut-demo!')).toBeVisible();
});
