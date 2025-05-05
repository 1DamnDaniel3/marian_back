import { sequelize } from './connection.js';

//Import models:

import {
    Activities, Applications, ComfortLevels, CustomTourRequests, CustomTourActivities,
    Favorites, Regions, RegionActivities, Reviews, TourActivities,
    Tours, Users, Landmarks, SeasonPeriods, RegionSeasons,
    Contacts
} from './models/index.js'

//Make links between models

// Users ↔ Applications
Users.hasMany(Applications, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Applications.belongsTo(Users, { foreignKey: 'user_id' });

// Users ↔ Reviews
Users.hasMany(Reviews, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Reviews.belongsTo(Users, { foreignKey: 'user_id' });

// Users ↔ Favorites
Users.belongsToMany(Tours, {
    through: Favorites,
    foreignKey: 'user_id',
    otherKey: 'tour_id',
    onDelete: 'CASCADE'
});
Tours.belongsToMany(Users, {
    through: Favorites,
    foreignKey: 'tour_id',
    otherKey: 'user_id',
    onDelete: 'CASCADE'
});

// Users ↔ CustomTourRequests
Users.hasMany(CustomTourRequests, { foreignKey: 'user_id', onDelete: 'CASCADE' });
CustomTourRequests.belongsTo(Users, { foreignKey: 'user_id' });

// Regions ↔ Tours
Regions.hasMany(Tours, { foreignKey: 'region_id', onDelete: 'CASCADE' });
Tours.belongsTo(Regions, { foreignKey: 'region_id' });

// Regions ↔ Landmarks
Regions.hasMany(Landmarks, { foreignKey: 'region_id' });
Landmarks.belongsTo(Regions, { foreignKey: 'region_id' });

// Regions ↔ CustomTourRequests
Regions.hasMany(CustomTourRequests, { foreignKey: 'region_id', onDelete: 'CASCADE' });
CustomTourRequests.belongsTo(Regions, { foreignKey: 'region_id' });

// ComfortLevels ↔ Tours
ComfortLevels.hasMany(Tours, { foreignKey: 'comfort_level_id', onDelete: 'CASCADE' });
Tours.belongsTo(ComfortLevels, { foreignKey: 'comfort_level_id' });

// ComfortLevels ↔ CustomTourRequests
ComfortLevels.hasMany(CustomTourRequests, { foreignKey: 'comfort_level_id', onDelete: 'CASCADE' });
CustomTourRequests.belongsTo(ComfortLevels, { foreignKey: 'comfort_level_id' });

// Tours ↔ Applications
Tours.hasMany(Applications, { foreignKey: 'tour_id', onDelete: 'CASCADE' });
Applications.belongsTo(Tours, { foreignKey: 'tour_id' });

// Tours ↔ Reviews
Tours.hasMany(Reviews, { foreignKey: 'tour_id', onDelete: 'CASCADE' });
Reviews.belongsTo(Tours, { foreignKey: 'tour_id' });

// Tours ↔ Activities (many-to-many)
Tours.belongsToMany(Activities, {
    through: TourActivities,
    foreignKey: 'tour_id',
    otherKey: 'activity_id',
    onDelete: 'CASCADE'
});
Activities.belongsToMany(Tours, {
    through: TourActivities,
    foreignKey: 'activity_id',
    otherKey: 'tour_id',
    onDelete: 'CASCADE'
});

// Regions ↔ Activities (many-to-many)
Regions.belongsToMany(Activities, {
    through: RegionActivities,
    foreignKey: 'region_id',
    otherKey: 'activity_id',
    onDelete: 'CASCADE'
});
Activities.belongsToMany(Regions, {
    through: RegionActivities,
    foreignKey: 'activity_id',
    otherKey: 'region_id',
    onDelete: 'CASCADE'
});

// Regions ↔ SeasonPeriods (many-to-many)
Regions.belongsToMany(SeasonPeriods, {
    through: RegionSeasons,
    foreignKey: 'region_id',
    otherKey: 'season_id',
    onDelete: 'CASCADE'
});
SeasonPeriods.belongsToMany(Regions, {
    through: RegionSeasons,
    foreignKey: 'season_id',
    otherKey: 'region_id',
    onDelete: 'CASCADE'
});


// CustomTourRequests ↔ Activities (many-to-many)
CustomTourRequests.belongsToMany(Activities, {
    through: CustomTourActivities,
    foreignKey: 'request_id',
    otherKey: 'activity_id',
    onDelete: 'CASCADE'
});
Activities.belongsToMany(CustomTourRequests, {
    through: CustomTourActivities,
    foreignKey: 'activity_id',
    otherKey: 'request_id',
    onDelete: 'CASCADE'
});

export {
    sequelize,
    Activities,
    Applications,
    ComfortLevels,
    CustomTourRequests,
    CustomTourActivities,
    Favorites,
    Regions,
    RegionActivities,
    Reviews,
    TourActivities,
    Tours,
    Users,
    Landmarks,
    SeasonPeriods,
    RegionSeasons,
    Contacts,
};