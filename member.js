function skillsMember() {
    var member = memberInput.value;
    var skill = skillInput.value;
    var skillLevel = skillLevelInput.value;
    var skillYears = skillYearsInput.value;
    var skillProficiency = skillProficiencyInput.value;
    var skillDescription = skillDescriptionInput.value;
    var skillLink = skillLinkInput.value;
    var skillLinkText = skillLinkTextInput.value;
    var skillLink2 = skillLink2Input.value;
    var skillLinkText2 = skillLinkText2Input.value;

    var skillOutput = document.getElementById("skillOutput");
    var skillOutputCode = document.getElementById("skillOutputCode");
    var skillOutputCode2 = document.getElementById("skillOutputCode2");
    var skillOutputCode3 = document.getElementById("skillOutputCode3");

    if (skillLink != "" && skillLinkText != "") {
        skillOutputCode2.innerHTML = '<a href="' + skillLink + '">' + skillLinkText + '</a>';
    } else if (skillLink == "" && skillLinkText == "") {
        skillOutputCode2.innerHTML = "";
    } else if (skillLink != "" && skillLinkText == "") {
        skillOutputCode2.innerHTML = '<a href="' + skillLink + '">Link</a>';
    } else if (skillLink == "" && skillLinkText != "") {
        skillOutputCode2.innerHTML = skillLinkText;
    }

    if (skillLink2 != "" && skillLinkText2 != "") {
        skillOutputCode3.innerHTML = '<a href="' + skillLink2 + '">' + skillLinkText2 + '</a>';
    } else if (skillLink2 == "" && skillLinkText2 == "") {
        skillOutputCode3.innerHTML = "";
    } else if (skillLink2 != "" && skillLinkText2 == "") {
        skillOutputCode3.innerHTML = '<a href="' + skillLink2 + '">Link</a>';
    } else if (skillLink2 == "" && skillLinkText2 != "") {
        skillOutputCode3.innerHTML = skillLinkText2;
    }

    skillOutputCode.innerHTML = '<li class="skill"><div class="skill-info"><div class="skill-name">' + skill + '</div><div class="skill-level">' + skillLevel + '</div><div class="skill-years">' + skillYears + '</div><div class="skill-proficiency">' + skillProficiency + '</div><div