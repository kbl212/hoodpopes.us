app.controller('deckCtrl', function ($scope, $location, $anchorScroll) {

    $scope.GoToTop = function (cardIn) {
        if (document.querySelector('.current-deck-title')) {
            $location.hash('deckbuilder');
            $anchorScroll();
            $scope.cardSelect = 'selecting';
            console.log($scope.cardSelect);
        }
        $scope.currCard = cardIn;
        $scope.currCardIndex = $scope.allDeck.indexOf(cardIn);
        $scope.cardSwitching = 'card-switching';
    };

    $scope.cardSwitch = function (cardIn) {
        if ($scope.cardSelect === 'selecting') {
            $scope.cardToSwitchOut = $scope.currentDeck[$scope.currentDeck.indexOf(cardIn)];
            $scope.cardToSwitchIn = $scope.currCard;

            $scope.currentDeck.splice($scope.currentDeck.indexOf(cardIn), 1, $scope.cardToSwitchIn);

            $scope.allDeck.splice($scope.currCardIndex, 1);
            $scope.allDeck.push($scope.cardToSwitchOut);

            $scope.cardSelect = "inactive";

            $scope.calculateAvgElixir();
        }
    }

    $scope.cardSelect = "inactive";

    $scope.currentDeck = [
        {
            name: "Archers",
            cost: 3,
            picture: "resources/images/ArchersCard.png",
            type: "Troop"
        },
        {
            name: "Baby Dragon",
            cost: 4,
            picture: "resources/images/BabyDragonCard.png",
            type: "Troop"
        },
        {
            name: "Barbarians",
            cost: 5,
            picture: "resources/images/BarbariansCard.png",
            type: "Troop"
        },
        {
            name: "Bomber",
            cost: 3,
            picture: "resources/images/BomberCard.png",
            type: "Troop"
        },
        {
            name: "Bowler",
            cost: 5,
            picture: "resources/images/BowlerCard.png",
            type: "Troop"
        },
        {
            name: "Balloon",
            cost: 5,
            picture: "resources/images/BalloonCard.png",
            type: "Troop"
        },
        {
            name: "Dark Prince",
            cost: 4,
            picture: "resources/images/DarkPrinceCard.png",
            type: "Troop"
        },
        {
            name: "Fire Spirits",
            cost: 5,
            picture: "resources/images/FireSpiritsCard.png",
            type: "Troop"
        }
    ];

    $scope.calculateAvgElixir = function () {
        $scope.averageElixirCost = (($scope.currentDeck[0].cost + $scope.currentDeck[1].cost + $scope.currentDeck[2].cost + $scope.currentDeck[3].cost + $scope.currentDeck[4].cost + $scope.currentDeck[5].cost + $scope.currentDeck[6].cost + $scope.currentDeck[7].cost) / 8).toFixed(1);
    }

    $scope.calculateAvgElixir();

    $scope.allDeck = [
        {
            name: "Giant Skeleton",
            cost: 6,
            picture: "resources/images/GiantSkeletonCard.png",
            type: "Troop"
        },
        {
            name: "Goblins",
            cost: 2,
            picture: "resources/images/GoblinsCard.png",
            type: "Troop"
        },
        {
            name: "Golem",
            cost: 8,
            picture: "resources/images/GolemCard.png",
            type: "Troop"
        },
        {
            name: "Guards",
            cost: 3,
            picture: "resources/images/GuardsCard.png",
            type: "Troop"
        },
        {
            name: "Hog Rider",
            cost: 5,
            picture: "resources/images/HogRiderCard.png",
            type: "Troop"
        },
        {
            name: "Ice Golem",
            cost: 2,
            picture: "resources/images/IceGolemCard.png",
            type: "Troop"
        },
        {
            name: "Ice Spirit",
            cost: 1,
            picture: "resources/images/IceSpiritCard.png",
            type: "Troop"
        },
        {
            name: "Ice Wizard",
            cost: 3,
            picture: "resources/images/IceWizardCard.png",
            type: "Troop"
        },
        {
            name: "Inferno Dragon",
            cost: 4,
            picture: "resources/images/InfernoDragonCard.png",
            type: "Troop"
        },
        {
            name: "Giant",
            cost: 5,
            picture: "resources/images/GiantCard.png",
            type: "Troop"
        },
        {
            name: "Knight",
            cost: 3,
            picture: "resources/images/KnightCard.png",
            type: "Troop"
        },
        {
            name: "Lava Hound",
            cost: 7,
            picture: "resources/images/LavaHoundCard.png",
            type: "Troop"
        },
        {
            name: "Lumberjack",
            cost: 4,
            picture: "resources/images/LumberjackCard.png",
            type: "Troop"
        },
        {
            name: "Mega Minion",
            cost: 3,
            picture: "resources/images/MegaMinionCard.png",
            type: "Troop"
        },
        {
            name: "Miner",
            cost: 3,
            picture: "resources/images/MinerCard.png",
            type: "Troop"
        },
        {
            name: "Mini P.E.K.K.A",
            cost: 5,
            picture: "resources/images/MiniPEKKACard.png",
            type: "Troop"
        },
        {
            name: "Prince",
            cost: 5,
            picture: "resources/images/PrinceCard.png",
            type: "Troop"
        },
        {
            name: "Princess",
            cost: 3,
            picture: "resources/images/PrincessCard.png",
            type: "Troop"
        },
        {
            name: "Royal Giant",
            cost: 6,
            picture: "resources/images/RoyalGiantCard.png",
            type: "Troop"
        },
        {
            name: "Skeleton Army",
            cost: 3,
            picture: "resources/images/SkeletonArmyCard.png",
            type: "Troop"
        },
        {
            name: "Skeletons",
            cost: 1,
            picture: "resources/images/SkeletonsCard.png",
            type: "Troop"
        },
        {
            name: "Sparky",
            cost: 6,
            picture: "resources/images/SparkyCard.png",
            type: "Troop"
        },
        {
            name: "Spear Goblins",
            cost: 2,
            picture: "resources/images/SpearGoblinsCard.png",
            type: "Troop"
        },
        {
            name: "Three Musketeers",
            cost: 9,
            picture: "resources/images/ThreeMusketeersCard.png",
            type: "Troop"
        },
        {
            name: "Valkyrie",
            cost: 4,
            picture: "resources/images/ValkyrieCard.png",
            type: "Troop"
        },
        {
            name: "Witch",
            cost: 5,
            picture: "resources/images/WitchCard.png",
            type: "Troop"
        },
        {
            name: "Wizard",
            cost: 4,
            picture: "resources/images/WizardCard.png",
            type: "Troop"
        },
    ];



});