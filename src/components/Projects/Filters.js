import React from "react";

const Filters = ({
    minBudget,
    maxBudget,
    onMinBudgetChange,
    onMaxBudgetChange,
    selectedSkills,
    onSkillChange,
}) => {
    return (
        <div className="filters-container">
            <div className="filters">
                <div className="filter-group">
                    <h4>Budget</h4>
                    <input
                        type="number"
                        placeholder="Min"
                        value={minBudget}
                        onChange={onMinBudgetChange}
                    />
                    <input
                        type="number"
                        placeholder="Max"
                        value={maxBudget}
                        onChange={onMaxBudgetChange}
                    />
                </div>
                <div className="filter-group">
                    <h4>Skills</h4>
                    <label>
                        <input
                            type="checkbox"
                            value="React"
                            checked={selectedSkills.includes("React")}
                            onChange={onSkillChange}
                        />
                        React
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Node.js"
                            checked={selectedSkills.includes("Node.js")}
                            onChange={onSkillChange}
                        />
                        Node.js
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Python"
                            checked={selectedSkills.includes("Python")}
                            onChange={onSkillChange}
                        />
                        Python
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Filters;
