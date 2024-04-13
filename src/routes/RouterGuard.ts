import { RouteLocationNormalized, NavigationGuardNext, Router, RouteRecordName } from 'vue-router';

const routerGuard = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext, router: Router): void => {
  const routeName: RouteRecordName = to?.name || '';
  const hasRoute: boolean = router.hasRoute(routeName);
  if (hasRoute) return next();
  router.push({ name: 'Pokemon' });
};

export default routerGuard;