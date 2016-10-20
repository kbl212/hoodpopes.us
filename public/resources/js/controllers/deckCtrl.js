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
            cost: 2,
            picture: "resources/images/FireSpiritsCard.png",
            type: "Troop"
        }
    ];

    $scope.calculateAvgElixir = function () {
        $scope.divisor = 8;
        $scope.totalElixirCost = 0;
        for (var i = 0; i < $scope.currentDeck.length; i++) {
            console.log("current total: ", $scope.totalElixirCost);
            if ($scope.currentDeck[i].name === "Mirror") {
                $scope.totalElixirCost += 2;

            } else {
                $scope.totalElixirCost += Number($scope.currentDeck[i].cost);
            }
        }
        $scope.averageElixirCost = ($scope.totalElixirCost / $scope.divisor).toFixed(1);
        console.log($scope.totalElixirCost + " / " + $scope.divisor + " = " + $scope.averageElixirCost);

    }
    $scope.calculateAvgElixir();

    $scope.allDeck = [
        {
            name: "Minions",
            cost: 3,
            picture: "resources/images/MinionsCard.png",
            type: "Troop"
        },

        {
            name: "Minion Horde",
            cost: 5,
            picture: "resources/images/MinionHordeCard.png",
            type: "Troop"
        },
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
        {
            name: "Musketeer",
            cost: "4",
            picture: "resources/images/MusketeerCard.png",
            type: "Troop"
        },
        {
            name: "Graveyard",
            cost: 5,
            picture: "resources/images/GraveyardCard.png",
            type: "Spell"
        },
        {
            name: "Mirror",
            cost: "?",
            picture: "resources/images/MirrorCard.png",
            type: "Spell"
        },
        {
            name: "The Log",
            cost: "2",
            picture: "resources/images/TheLogCard.png",
            type: "Spell"
        },
        {
            name: "Zap",
            cost: "2",
            picture: "resources/images/ZapCard.png",
            type: "Spell"
        },
        {
            name: "Poison",
            cost: "4",
            picture: "resources/images/PoisonCard.png",
            type: "Spell"
        },
        {
            name: "Rocket",
            cost: "6",
            picture: "resources/images/RocketCard.png",
            type: "Spell"
        },
        {
            name: "Fireball",
            cost: "4",
            picture: "resources/images/FireballCard.png",
            type: "Spell"
        },
        {
            name: "Rage",
            cost: "4",
            picture: "resources/images/RageCard.png",
            type: "Spell"
        },
        {
            name: "Lightning",
            cost: "6",
            picture: "resources/images/LightningCard.png",
            type: "Spell"
        },
        {
            name: "Goblin Barrel",
            cost: "3",
            picture: "resources/images/GoblinBarrelCard.png",
            type: "Spell"
        },
        {
            name: "Arrows",
            cost: "3",
            picture: "resources/images/ArrowsCard.png",
            type: "Spell"
        },
        {
            name: "Freeze",
            cost: "4",
            picture: "resources/images/FreezeCard.png",
            type: "Spell"
        },
        {
            name: "Tombstone",
            cost: 6,
            picture: "resources/images/TombstoneCard.png",
            type: "Troop"
        },
        {
            name: "Bomb Tower",
            cost: "5",
            picture: "resources/images/BombTowerCard.png",
            type: "Building"
        },
        {
            name: "Elixir Collector",
            cost: "6",
            picture: "resources/images/ElixirCollectorCard.png",
            type: "Building"
        },
        {
            name: "X-Bow",
            cost: "6",
            picture: "resources/images/X-BowCard.png",
            type: "Building"
        },
        {
            name: "Inferno Tower",
            cost: "5",
            picture: "resources/images/InfernoTowerCard.png",
            type: "Building"
        },
        {
            name: "Tesla",
            cost: "4",
            picture: "resources/images/TeslaCard.png",
            type: "Building"
        },
        {
            name: "Mortar",
            cost: "4",
            picture: "resources/images/MortarCard.png",
            type: "Building"
        },
        {
            name: "Cannon",
            cost: "3",
            picture: "resources/images/CannonCard.png",
            type: "Building"
        },
        {
            name: "Goblin Hut",
            cost: "5",
            picture: "resources/images/GoblinHutCard.png",
            type: "Building"
        },
        {
            name: "Furnace",
            cost: "4",
            picture: "resources/images/FurnaceCard.png",
            type: "Building"
        },
        {
            name: "Barbarian Hut",
            cost: "7",
            picture: "resources/images/BarbarianHutCard.png",
            type: "Building"
        }
    ];



});