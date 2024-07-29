exports.validatePercentages = (participants) => {
    const totalPercentage = participants.reduce((total, participant) => total + participant.percentage, 0);
    return totalPercentage === 100;
};
