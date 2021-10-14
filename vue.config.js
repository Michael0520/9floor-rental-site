module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/9floor-rental-site/" // test20200915 為 repo 名稱
      : "/",
};
