// to make json imports not complain with TS
declare module "*.json" {
  const value: any;
  export default value;
}
