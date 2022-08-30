const PATH_BACKEND = "../images/projects/backend/";

const backendProjects = [
    {
        name: "Data Flights",
        image: `${PATH_BACKEND}data-flights.png`,
        branch: "https://github.com/tryber/sd-011-mongodb-dataflights/tree/vinicius-alves-da-rocha-mongodb-dataflights",
        pullRequest: "https://github.com/tryber/sd-011-mongodb-dataflights/pull/126#issuecomment-919333028",
    },
    {
        name: "Commerce",
        image: `${PATH_BACKEND}commerce.svg`,
        branch: "https://github.com/tryber/sd-011-mongodb-commerce/tree/vinicius-alves-da-rocha-mongodb-commerce",
        pullRequest: "https://github.com/tryber/sd-011-mongodb-commerce/pull/61#issuecomment-921135600",
    },
    {
        name: "Aggregations",
        image: `${PATH_BACKEND}aggregations.svg`,
        branch: "https://github.com/tryber/sd-011-mongodb-aggregations/tree/vinicius-alves-da-rocha-mongodb-aggregations",
        pullRequest: "https://github.com/tryber/sd-011-mongodb-aggregations/pull/95#issuecomment-927405697",
    },
    {
        name: "Stranger Things Backend",
        image: `${PATH_BACKEND}stranger-things-backend.svg`,
        branch: "https://github.com/tryber/sd-011-stranger-things-backend/tree/vinicius-alves-da-rocha-sd-011-stranger-things-backend",
        pullRequest: "https://github.com/tryber/sd-011-stranger-things-backend/pull/84#issuecomment-973678512",
    },
];

const portfolioItemsBackend = document.getElementById("portfolio-items-backend");

const projectItem = ({name, image, branch, pullRequest}) => {
    const itemPortfolio = document.createElement("div");
    itemPortfolio.classList.add("item-portfolio");

    const imgItemPortfolio = document.createElement("img");
    imgItemPortfolio.setAttribute("src", image);
    imgItemPortfolio.setAttribute("alt", name);

    const textPortfolioItem = document.createElement("div");
    textPortfolioItem.classList.add("text-portfolio-item");

    const h2TextPortfolioItem = document.createElement("h2");
    h2TextPortfolioItem.innerText = name;

    const paragraphBranchTextPortfolioItem = document.createElement("p");
    paragraphBranchTextPortfolioItem.classList.add("links-my-branch-pr");
    const anchorBranchTextPortfolioItem = document.createElement("a");
    anchorBranchTextPortfolioItem.setAttribute("src", branch);
    anchorBranchTextPortfolioItem.innerText = "Branch com o meu código";
    paragraphBranchTextPortfolioItem.append(anchorBranchTextPortfolioItem);

    const paragraphPullRequestTextPortfolioItem = document.createElement("p");
    paragraphPullRequestTextPortfolioItem.classList.add("links-my-branch-pr");
    const anchorPullRequestTextPortfolioItem = document.createElement("a");
    anchorPullRequestTextPortfolioItem.setAttribute("src", pullRequest);
    anchorPullRequestTextPortfolioItem.innerText = "Pull Request";
    paragraphPullRequestTextPortfolioItem.append(anchorPullRequestTextPortfolioItem);
    
    textPortfolioItem.append(h2TextPortfolioItem, paragraphBranchTextPortfolioItem, paragraphPullRequestTextPortfolioItem);

    itemPortfolio.append(imgItemPortfolio, textPortfolioItem);
    return itemPortfolio;
};

backendProjects.forEach(project => portfolioItemsBackend.append(projectItem(project)));
